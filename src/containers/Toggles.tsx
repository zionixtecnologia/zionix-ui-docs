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
          <div className="flex gap-4 flex-wrap">
            <Toggle name="myoption" label="is primary?" checked />
            <Toggle name="myoption3" />
            <Toggle name="myoption2" accent checked label="is accent?" />
            <Toggle name="myoption4" secondary checked label="is secondary?" />
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <div>
              <Toggle name="myoption" label="is primary?" checked />
              <Toggle name="myoption3" />
              <Toggle name="myoption2" accent checked label="is accent?" />
              <Toggle name="myoption4" secondary checked label="is secondary?" />          
            </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
