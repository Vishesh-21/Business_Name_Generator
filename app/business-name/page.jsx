"use client";
import { DomainStatus } from "@/components/DomainStatus";
import DotLoader from "@/components/DotLoader";
import { Sidebar } from "@/components/Sidebar";
import { useQueryContext } from "@/context/BusinessNameContext";
import { generatePrompt, randomName, randomNames } from "@/helper/Function";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useRef, useState } from "react";

const BusinessName = () => {
  const { query, updateQuery } = useQueryContext();
  const [names, setNames] = useState(randomNames);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [domainDialogueOpen, setDomainDialogueOpen] = useState(false);
  const [domain, setDomain] = useState("");
  const [nameToBeSaved, setNameToBeSaved] = useState("");

  const observerDiv = useRef();

  const fetchBusinessNames = async () => {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_GEMINI_API_KEY
      );
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

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
    setNameToBeSaved(businessName);
    const domain =
      businessName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + ".com";
    setDomain(domain);
    setDomainDialogueOpen(!domainDialogueOpen);
  };

  return (
    <div className=" text-white mb-8 bg-black/10">
      <div className="flex md:flex-row flex-col justify-center md:items-start items-center gap-10 py-10 border-gray-300/60">
        <div className="md:w-[25%] w-full">
          <Sidebar setRefresh={setRefresh} refresh={refresh} />
        </div>
        <div id="namesSection" className="md:w-[75%] h-[120vh] overflow-auto">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
            {names &&
              names.length > 0 &&
              names.map((name, index) => (
                <div
                  key={index}
                  onClick={() => getDomainStatus(name)}
                  className="border p-3 rounded-md tracking-wide cursor-pointer hover:bg-primary hover:font-bold hover:text-black duration-300 relative"
                >
                  {name}
                  <div className="absolute h-[1px] w-1/2 top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary  to-transparent "></div>
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
        name={nameToBeSaved}
      />
    </div>
  );
};

export default BusinessName;
