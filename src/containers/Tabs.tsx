import { Text, Tab, Hr } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconCrop32, IconHome, IconSettings } from "@tabler/icons-react";

export const Tabs = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconCrop32 />
        Tabs
      </Text>

      <Tab.Root>
        <Tab.Tabs>
          <Tab.Item id="1">
            <IconHome /> My Home
          </Tab.Item>
          <Tab.Item id="2">
            <IconSettings /> Settings
          </Tab.Item>
          <Tab.Item id="code">
            <Icon.Code />
            Code
          </Tab.Item>
        </Tab.Tabs>

        <Tab.Content idItem="1">
          <p>
            This is <strong>My Home Tab</strong>
          </p>
        </Tab.Content>

        <Tab.Content idItem="2">
          <p>
            This is <strong>Settings Tab</strong>
          </p>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
        <div>
            <Tab.Root>
            <Tab.Tabs>
            <Tab.Item id="home">
                <IconHome /> My Home
            </Tab.Item>
            <Tab.Item id="settings">
                <IconSettings /> Settings
            </Tab.Item>
            </Tab.Tabs>

            <Tab.Content idItem="home">
            <p>
                This is <strong>My Home Tab</strong>
            </p>
            </Tab.Content>

            <Tab.Content idItem="settings">
            <p>
                This is <strong>Settings Tab</strong>
            </p>
            </Tab.Content>

            </Tab.Root>
        </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
