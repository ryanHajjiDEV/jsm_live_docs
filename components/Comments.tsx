import { cn } from "@/lib/utils";
import { useIsThreadActive } from "@liveblocks/react-lexical";
import { Composer, Thread } from "@liveblocks/react-ui";
import { useThreads } from "@liveblocks/react/suspense";
import React from "react";

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {
  const isActive = useIsThreadActive(thread.id);
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden", // Rounded corners for the wrapper
        isActive && "border-blue-500 shadow-md" // Apply border color and shadow when active
      )}
    >
      <Thread
        thread={thread}
        data-state={isActive ? "active" : null}
        className={cn(
          "comment-thread", // No border here
          thread.resolved && "opacity-40"
        )}
      />
      {isActive && (
        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"></div>
      )}
    </div>
  );
};

const Comments = () => {
  const { threads } = useThreads();

  return (
    <div className="comments-container mr-9">
      {" "}
      {/* Adjust padding here */}
      <Composer className="comment-composer rounded-lg border border-gray-300 p-2.5 mb-1" />{" "}
      {/* Reduce margin-bottom here */}
      {threads.map((thread) => (
        <ThreadWrapper key={thread.id} thread={thread} />
      ))}
    </div>
  );
};

export default Comments;
