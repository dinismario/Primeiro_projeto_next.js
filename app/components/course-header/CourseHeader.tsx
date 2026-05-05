"use client";

import { useEffect, useState } from "react";
import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContentCopy } from "./components/CopyContext";

interface ICourseHeaderProps {
  title: string;
  description: string;
  numberOfClasses: number;
}

export const CourseHeader = ({
  title,
  description,
  numberOfClasses,
}: ICourseHeaderProps) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-extrabold">
        {title}
      </h1>

      <CollapsibleText numberOfLineswhenClosed={3}>
        {description}
      </CollapsibleText>

      <div className="flex items-center gap-2">
        <ContentCopy
          title="Copie o conteúdo abaixo"
          content={url}
        >
          <button className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2">
            <MdShare />
            Compartilhar
          </button>
        </ContentCopy>

        <span>{numberOfClasses} aulas</span>
      </div>
    </div>
  );
};