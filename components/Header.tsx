"use client";

import { Tag } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import config from "../app/config.mts";
import { useAppData } from "../hooks/useAppData";

export const Header = () => {
  const { tag: activeTagId, language: activeLanguageId, category: activeCategoryId } = useParams();
  const { languages, categories, tags } = useAppData();
  const activeFilter = [...languages, ...categories, ...tags].find(
    (t: Tag) => t.id === activeTagId || t.id === activeLanguageId || t.id === activeCategoryId
  );

  return (
    <header className="container mx-auto my-5 flex flex-col items-center bg-stone-50 p-6 md:my-10 md:flex-row md:justify-between lg:max-w-6xl dark:bg-black-400">
      <nav className="flex flex-wrap items-center md:justify-center">
        <Link href="/" title="Home" aria-label="Home">
          <Image src="/logo.svg" alt={config.meta.logo} width={280} height={40} />
        </Link>
        {activeFilter ? (
          <span className="mt-4 cursor-pointer text-4xl font-semibold text-gray-900 sm:ml-8 sm:mt-0 dark:text-silver-500">
            {activeFilter?.display}
          </span>
        ) : null}
      </nav>
    </header>
  );
};
