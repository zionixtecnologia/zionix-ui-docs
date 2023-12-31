import { Text, Tab, Hr, Toggle } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconToggleLeft } from "@tabler/icons-react";

export const Toggles = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconToggleLeft />
        Toggle
      </Text>

      <Tab.Root>
        <Tab.Tabs>
          <Tab.Item id="design" active>
            <Icon.Eye /> Design
          </Tab.Item>
          <Tab.Item id="code">
            <Icon.Code />
            Code
          </Tab.Item>
        </Tab.Tabs>

        <Tab.Content idItem="design">
          <div className="flex gap-4">
            <Toggle name="myoption" label="Dark mode?" checked />
            <Toggle name="myoption3" label="Is Super?" />
            <Toggle name="myoption2" accent checked  />
            <Toggle name="myoption4" secondary checked />
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <div>
              <Toggle name="myoption" label="Dark mode?" checked />
              <Toggle name="myoption3" label="Is Super?" />
              <Toggle name="myoption2" accent checked  />
              <Toggle name="myoption4" secondary checked />              
            </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
