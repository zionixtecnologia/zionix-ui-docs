import { Text, Tab, Hr } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";

export const Typography = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <Icon.Typography />
        Typography
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
          <div style={{gap: '36px'}} className="flex">
            <div className="flex flex-col gap-4">
              <Text>Text 1</Text>
              <Text large>Text 1</Text>
              <Text extra>Text 1</Text>
              <Text extraLarge>Text 1</Text>
              <Text superLarge>Text 1</Text>
              <Text thin superLarge>
                Text 1
              </Text>
              <Text subtitle>Description text</Text>
              <Text accent>Accent color</Text>
            </div>
            <div className="flex flex-col gap-4">
              <Text semiBold>Text 1</Text>
              <Text semiBold large>
                Text 1
              </Text>
              <Text semiBold extra>
                Text 1
              </Text>
              <Text semiBold extraLarge>
                Text 1
              </Text>
              <Text semiBold superLarge>
                Text 1
              </Text>
              <Text bold superLarge>
                Text 1
              </Text>
              <Text semiBold subtitle>
                Description text
              </Text>
              <Text semiBold accent>
                Accent color
              </Text>
            </div>
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
