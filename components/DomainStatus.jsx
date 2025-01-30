"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DotLoader from "./DotLoader";

export const DomainStatus = ({ open, setOpen, domain }) => {
  const [loading, setLoading] = useState(false);
  const [domainStatus, setDomainStatus] = useState("");
  const url = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${process.env.NEXT_PUBLIC_API_KEY_2}&domainName=${domain}&credits=DA`;

  useEffect(() => {
    const getStatus = async () => {
      if (domain) {
        try {
          setLoading(true);
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          const status = data.DomainInfo.domainAvailability;
          setDomainStatus(status);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getStatus();
  }, [domain]);

  console.log(domainStatus);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-4xl font-semibold text-center mb-3">
            {domain}
          </DialogTitle>
          <DialogDescription></DialogDescription>
          {loading ? (
            <p className="text-center">
              <DotLoader />
            </p>
          ) : domainStatus && domainStatus === "AVAILABLE" ? (
            <div
              className="flex justify-center animate-statusAvailable"
              style={{ opacity: domainStatus === "AVAILABLE" ? 1 : 0 }}
            >
              <span className="bg-green-500 text-xl px-10 py-2 rounded-md text-white">
                {domainStatus}
              </span>
            </div>
          ) : (
            <div
              className="flex justify-center animate-statusUnavailable"
              style={{ opacity: domainStatus === "UNAVAILABLE" ? 1 : 0 }}
            >
              <span className="bg-red-500 text-xl px-10 py-2 rounded-md text-white">
                {domainStatus}
              </span>
            </div>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
