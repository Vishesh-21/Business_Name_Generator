"use client";
import { DomainStatus } from "@/components/DomainStatus";
import DotLoader from "@/components/DotLoader";
import { Sidebar } from "@/components/Sidebar";
import { useQueryContext } from "@/context/BusinessNameContext";
import { generatePrompt } from "@/helper/Function";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useRef, useState } from "react";

const BusinessName = () => {
  const { query, updateQuery } = useQueryContext();
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [domainDialogueOpen, setDomainDialogueOpen] = useState(false);
  const [domain, setDomain] = useState("");

  const observerDiv = useRef();

  const fetchBusinessNames = async () => {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const inputs = { ...query, names };
      const prompt = generatePrompt(inputs);

      const result = await model.generateContent(prompt);

      // Extract text from response
      const textResponse = result.response.candidates[0].content.parts[0].text;

      // Use a regex to extract only the JSON content
      const jsonMatch = textResponse.match(/```json\n([\s\S]+?)\n```/);

      if (!jsonMatch) {
        console.error("Error: No valid JSON found in the response.");
        return;
      }

      const jsonString = jsonMatch[1].trim(); // Extracted JSON content

      // Parse JSON safely
      const jsonData = JSON.parse(jsonString);
      if (jsonData && Array.isArray(jsonData.names)) {
        setNames((prevNames) => [...prevNames, ...jsonData.names]);
      }
    } catch (error) {
      console.error("Error fetching business names:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinessNames();
  }, [pages]);

  useEffect(() => {
    setNames([]);
    fetchBusinessNames();
  }, [refresh]);

  const handleIntersection = (enteries) => {
    const entry = enteries[0];
    if (entry.isIntersecting) {
      setPages((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "50px",
      threshold: [0, 0.5, 1],
    });

    if (observerDiv.current) {
      observer.observe(observerDiv.current);
    }
    return () => {
      if (observerDiv.current) {
        observer.unobserve(observerDiv.current);
      }
    };
  }, []);

  //function to get the domain status
  const getDomainStatus = (businessName) => {
    const domain =
      businessName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + ".com";
    setDomain(domain);
    setDomainDialogueOpen(!domainDialogueOpen);
  };

  return (
    <div className="px-20 text-white mb-8">
      <h1 className="mt-24 text-center text-4xl font-semibold border-b pb-4">
        Business Name
      </h1>

      <div className="flex justify-center items-start gap-10 mt-8">
        <div className="w-[25%]">
          <Sidebar setRefresh={setRefresh} refresh={refresh} />
        </div>
        <div id="namesSection" className="w-[75%] h-[120vh] overflow-auto">
          <div className=" grid grid-cols-4 gap-5">
            {names &&
              names.length > 0 &&
              names.map((name, index) => (
                <div
                  key={index}
                  onClick={() => getDomainStatus(name)}
                  className="border border-gray-400 p-3 rounded-md font-bold cursor-pointer hover:bg-primary hover:text-black duration-300"
                >
                  {name}
                </div>
              ))}
          </div>
          {loading && <DotLoader />}
          <div ref={observerDiv} className="h-2"></div>
        </div>
      </div>
      <DomainStatus
        open={domainDialogueOpen}
        setOpen={setDomainDialogueOpen}
        domain={domain}
      />
    </div>
  );
};

export default BusinessName;
