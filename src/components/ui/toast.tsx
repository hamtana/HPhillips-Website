import * as React from "react";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

const ToastProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

const ToastViewport = () => (
  <div className="fixed top-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
);

const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    variant?: "default" | "destructive";
  }
>(
  (
    {
      className,
      children,
      open = true,
      onOpenChange,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    if (!open) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          "pointer-events-auto relative mb-3 flex w-full items-start justify-between gap-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all",
          variant === "destructive"
            ? "border-[rgba(164,55,55,0.35)] bg-[rgba(64,18,18,0.96)] text-[#ffe9e9]"
            : "border-[var(--line)] bg-[var(--surface-strong)] text-[var(--sea-ink)]",
          className,
        )}
        {...props}
      >
        <div className="grid gap-1">{children}</div>
        <button
          type="button"
          onClick={() => onOpenChange?.(false)}
          className="rounded-md p-1 text-current/70 transition hover:text-current"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  },
);
Toast.displayName = "Toast";

const ToastAction = ({ children }: { children?: React.ReactNode }) => (
  <>{children}</>
);
const ToastClose = ({ children }: { children?: React.ReactNode }) => (
  <>{children}</>
);
const ToastTitle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => <div className={cn("text-sm font-semibold", className)}>{children}</div>;
const ToastDescription = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => <div className={cn("text-sm opacity-90", className)}>{children}</div>;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
