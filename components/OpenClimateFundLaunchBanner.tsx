import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LaunchBannerClose from "./LaunchBannerClose";

export default function OpenClimateFundLaunchBanner(): JSX.Element {
  return (
    <div
      id="launch-banner"
      tabIndex={-1}
      className="flex w-full justify-between border-b border-stone-300 bg-stone-200 p-4 dark:border-black-600 dark:bg-black-500"
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="me-3 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-stone-100 p-1 dark:bg-gray-600">
            <FontAwesomeIcon
              icon={faBullhorn}
              className="size-3 text-gray-500 dark:text-gray-400"
            />
            <span className="sr-only">Bullhorn</span>
          </span>
          <span>
            We are launching{" "}
            <Link
              href="https://openclimate.fund"
              target="_blank"
              className="inline font-medium text-blue-600 underline decoration-primary-600 decoration-solid underline-offset-2 hover:no-underline dark:text-blue-500 dark:decoration-primary-500"
            >
              OpenClimate.Fund
            </Link>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <LaunchBannerClose />
      </div>
    </div>
  );
}
