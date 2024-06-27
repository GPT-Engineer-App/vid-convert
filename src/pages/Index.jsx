import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Index = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleConvert = async () => {
    if (!videoFile) {
      toast.error("Please upload a video file first.");
      return;
    }

    setIsConverting(true);

    try {
      // Simulate video conversion process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Video converted successfully!");
    } catch (error) {
      toast.error("Failed to convert video.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Video Converter</h1>
      <Input type="file" accept="video/*" onChange={handleFileChange} />
      <Button onClick={handleConvert} disabled={isConverting}>
        {isConverting ? "Converting..." : "Convert to MP4"}
      </Button>
    </div>
  );
};

export default Index;