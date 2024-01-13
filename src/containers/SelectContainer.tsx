import { Text, Tab, Hr, Select } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconLayoutList } from "@tabler/icons-react";

export const SelectContainer = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconLayoutList />
        Select
      </Text>

      <Tab.Root>
        <Tab.Tabs transparentCards>
          <Tab.Item id="design" active>
            <Icon.Eye /> Design
          </Tab.Item>
          <Tab.Item id="code">
            <Icon.Code />
            Code
          </Tab.Item>
        </Tab.Tabs>

        <Tab.Content idItem="design">
          <div className="flex gap-6">
            <div className="w-60">
              <Select
                placeholder="Select a country..."
                name="country"
                defaultValue="canada"
                onChange={(value) => {
                  console.log("Select country", value);
                }}
                options={[
                  {
                    label: "Brasil",
                    value: "brasil",
                    img: "https://flagpedia.net/data/flags/w580/br.webp",
                  },
                  {
                    label: "Argentina",
                    value: "argentina",
                    img: "https://flagpedia.net/data/flags/w580/ar.webp",
                  },
                  {
                    label: "Canada",
                    value: "canada",
                    img: "https://flagpedia.net/data/flags/w580/ca.webp",
                  },
                ]}
              />
            </div>

            <div className="w-60">
              <Select
                left
                placeholder="Select a country..."
                name="country"
                defaultValue="canada"
                onChange={(value) => {
                  console.log("Select country", value);
                }}
                options={[
                  {
                    label: "Brasil",
                    value: "brasil",
                  },
                  {
                    label: "Argentina",
                    value: "argentina",
                  },
                  {
                    label: "Canada",
                    value: "canada",
                  },
                ]}
              />
            </div>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
         <Select
         placeholder="Select a country..."
         name="country"
         defaultValue="canada"
         onChange={(value) => {
           console.log("Select country", value);
         }}
         options={[
           {
             label: "Brasil",
             value: "brasil",
             img: "https://flagpedia.net/data/flags/w580/br.webp",
           },
           {
             label: "Argentina",
             value: "argentina",
             img: "https://flagpedia.net/data/flags/w580/ar.webp",
           },
           {
             label: "Canadá",
             value: "canada",
             img: "https://flagpedia.net/data/flags/w580/ca.webp",
           },
         ]}
       />
        </div>
            `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
