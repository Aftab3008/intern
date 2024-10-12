import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-4 rounded-xl shadow-md bg-white dark:bg-black dark:border-white/[0.2] border border-transparent group hover:shadow-lg transition duration-200",
        className
      )}
    >
      {header}
      <div className="flex-grow flex flex-col justify-center">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 flex items-center justify-center">
          {icon}
          <span className="ml-2">{title}</span>
        </div>
        {children && <div>{children}</div>}
        <div className="font-sans font-normal text-black/85 text-lg dark:text-neutral-300 mb-2 flex items-center justify-center">
          {description}
        </div>
      </div>
    </div>
  );
};
