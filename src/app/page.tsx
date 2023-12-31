"use client";

import { Hr, Text } from "zionix-ui";
import pkg from "../../package.json";
import { Typography } from "@/containers/Typography";
import { Buttons } from "@/containers/Buttons";
import { Form } from "@/containers/Form";
import { Tabs } from "@/containers/Tabs";
import { Toggles } from "@/containers/Toggles";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center flex-wrap mt-8">
      <div className="container lg:max-w-4xl p-2 mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <Text superLarge thin>
                  ZIONIX
                </Text>
                <Text
                  large
                  className="text-white dark:text-slate-950 py-1 px-2 bg-slate-900 dark:bg-gray-50 rounded-lg shadow-sm"
                >
                  ui
                </Text>
              </div>
              <div className="flex gap-2 flex-wrap">
                <a
                  href="https://www.npmjs.com/package/zionix-ui"
                  className="text-gray-200"
                >
                  <img alt="NPM" src="https://badge.fury.io/js/zionix-ui.svg" />
                </a>
                <img alt="npm" src="https://img.shields.io/npm/dy/zionix-ui" />
              </div>
            </div>
          </div>
          <Text subtitle>
            Interface library documentation
            <span className="text-sm text-gray-600 dark:text-slate-300 p-2 border dark:border-slate-500 border-slate-600 rounded-lg">
              beta version {pkg.dependencies["zionix-ui"].substring(1, 10)}
            </span>
          </Text>
        </div>

        <div className="mt-8">
          <Hr />
          {/* Typography */}
          <Typography />

          {/* Buttons */}
          <Buttons />

          {/* Toggle */}
          <Toggles />

          {/* Tabs */}
          <Tabs />

          {/* Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}
