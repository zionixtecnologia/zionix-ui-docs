import { Text, Tab, Hr, Checkbox } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconSquareCheck, IconHome, IconSettings } from "@tabler/icons-react";

export const Checkboxes = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconSquareCheck />
        Checkbox
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
          <div className="flex gap-6 flex-wrap">
            <Checkbox label="Not Checked?" />
            <Checkbox label="Default Checkbox?" checked />
            <Checkbox secondary label="Secondary Checkbox?" checked />
            <Checkbox accent label="Accent Checkbox?" checked />
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <div className="flex gap-6 flex-wrap">
                <Checkbox label="Not Checked?" />
                <Checkbox label="Default Checkbox?" checked />
                <Checkbox secondary label="Secondary Checkbox?" checked />
                <Checkbox accent label="Accent Checkbox?" checked />
            </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
