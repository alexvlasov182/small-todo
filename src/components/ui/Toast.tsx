import { forwardRef,  type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const toastVariants = cva(
  "px-4 py-2 rounded shadow text-white mb-2 transition-all",
  {
    variants: {
      variant: {
        default: "bg-neutral-700",
        success: "bg-green-500",
        error: "bg-red-500",
        info: "bg-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ToastProps extends VariantProps<typeof toastVariants> {
  children: ReactNode;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(({ children, variant, ...props }, ref) => {
  return (
    <div ref={ref} className={toastVariants({ variant })} {...props}>
      {children}
    </div>
  );
});

Toast.displayName = "Toast";

// eslint-disable-next-line react-refresh/only-export-components
export { Toast, toastVariants };
