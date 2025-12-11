"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

type SearchInputProps = {
  label?: string;
  supportingText?: string;
  leadingIcon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const baseInputClasses =
  "w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-3 text-sm text-zinc-900 shadow-inner outline-none transition focus:border-zinc-400 focus:bg-white focus:shadow-md";

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      label,
      supportingText,
      leadingIcon = "🔍",
      className = "",
      inputClassName = "",
      ...inputProps
    },
    ref
  ) => {
    return (
      <label className={`flex w-full flex-col gap-1 ${className}`}>
        {label ? (
          <span className="text-sm font-medium text-zinc-700">{label}</span>
        ) : null}
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400"
          >
            {leadingIcon}
          </span>
          <input
            ref={ref}
            className={`${baseInputClasses} ${inputClassName}`.trim()}
            type="text"
            autoComplete="off"
            {...inputProps}
          />
        </div>
        {supportingText ? (
          <span className="text-xs text-zinc-500">{supportingText}</span>
        ) : null}
      </label>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;

