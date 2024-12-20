import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = ({ content }: { content: string }) => {
  return (
    <div className="py-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="prose prose-invert prose-zinc prose-headings:font-semibold max-w-none"
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
