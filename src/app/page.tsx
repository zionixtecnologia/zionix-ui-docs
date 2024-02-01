"use client";

import { Badge, Hr, Text, ToastNotification } from "zionix-ui";
import pkg from "../../package.json";
import { Typography } from "@/containers/Typography";
import { Buttons } from "@/containers/Buttons";
import { Form } from "@/containers/Form";
import { Tabs } from "@/containers/Tabs";
import { Toggles } from "@/containers/Toggles";
import { Dropdowns } from "@/containers/Dropdowns";
import { Checkboxes } from "@/containers/Checkboxes";
import { Avatars } from "@/containers/Avatars";
import { ScrollingContainer } from "@/containers/ScrollingContainer";
import { BadgeContainer } from "@/containers/BadgeContainer";
import { SelectContainer } from "@/containers/SelectContainer";
import { SkeletonContainer } from "@/containers/SkeletonContainer";
import { ModalContainer } from "@/containers/ModalContainer";
import { ToastNotificationContainer } from "@/containers/ToastNotificationContainer";

export default function Home() {
  return (
    <ToastNotification>
      <div className="flex flex-col justify-center items-center flex-wrap mt-8 overflow-y-auto">
        <div className="container lg:max-w-4xl p-2 mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-2 flex-wrap">
            <div className="flex justify-center items-center flex-col">
              {/* Logo */}
              <div className="flex justify-between items-center flex-col gap-4">
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
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://www.npmjs.com/package/zionix-ui"
                    className="text-gray-200"
                  >
                    <img
                      alt="NPM"
                      src="https://badge.fury.io/js/zionix-ui.svg"
                    />
                  </a>
                  <img
                    alt="npm"
                    src="https://img.shields.io/npm/dy/zionix-ui"
                  />
                  <Badge dark bordered>
                    beta version{" "}
                    {pkg.dependencies["zionix-ui"].substring(1, 10)}
                  </Badge>
                </div>
              </div>
            </div>
            <Text subtitle className="mt-6">
              The ZIONIX ui was developed based on Tailwindcss, this is the user
              guide for applying the components.
            </Text>
          </div>

          <div className="mt-8">
            <Hr />
            {/* Typography */}
            <Typography />

            {/* Buttons */}
            <Buttons />

            {/* Scrolling */}
            <ScrollingContainer />

            {/* ToastNotification */}
            <ToastNotificationContainer />

            {/* Modal */}
            <ModalContainer />

            {/* Skeleton */}
            <SkeletonContainer />

            {/* Avatars */}
            <Avatars />

            {/* Checkbox */}
            <Checkboxes />

            {/* Badge */}
            <BadgeContainer />

            {/* Toggle */}
            <Toggles />

            {/* Select */}
            <SelectContainer />

            {/* Dropdowns */}
            <Dropdowns />

            {/* Tabs */}
            <Tabs />

            {/* Form */}
            <Form />
          </div>
        </div>
      </div>
    </ToastNotification>
  );
}
