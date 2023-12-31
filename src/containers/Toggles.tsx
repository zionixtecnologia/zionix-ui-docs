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
            <Toggle name="myoption2" accent  />
            <Toggle name="myoption4" secondary checked />
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
              <div>
              <Text>Text 1</Text>
              <Text large>Text 1</Text>
              <Text extra>Text 1</Text>
              <Text extraLarge>Text 1</Text>
              <Text superLarge>Text 1</Text>
              <Text thin superLarge>Text 1</Text>
              <Text subtitle>Description text</Text>
              <Text accent>Accent color</Text>

              <Text semiBold>Text 1</Text>
              <Text semiBold large>Text 1</Text>
              <Text semiBold extra>Text 1</Text>
              <Text semiBold extraLarge>Text 1</Text>
              <Text semiBold superLarge>Text 1</Text>
              <Text bold superLarge>Text 1</Text>
              <Text semiBold subtitle>Description text</Text>
              <Text semiBold accent>Accent color</Text>
              </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
