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
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
          <div className="flex flex-wrap items-center gap-4">
            <Avatar label="PG" mini accent />
            <Avatar src="https://github.com/pablogeokar.png" />
            <Avatar label="PG" />
            <Avatar src="https://github.com/pablogeokar.png" shadow />
            <Avatar src="https://github.com/zionixtecnologia.png" ring />
            <Avatar label="ZN" secondary shadow />
            <Avatar src="https://github.com/zionixtecnologia.png" ring accent />
            <Avatar src="https://github.com/romatorres.png" large />
            <Avatar src="https://github.com/romatorres.png" large ring />
            <Avatar
                src="https://github.com/romatorres.png"
                large
                ring
                secondary
            />
            <Avatar
                src="https://github.com/zionixtecnologia.png"
                large
                ring
                accent
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
