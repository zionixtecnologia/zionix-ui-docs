import { Text, Tab, Hr, Toggle, Dropdown, Card } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconSelect } from "@tabler/icons-react";

export const Dropdowns = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconSelect />
        Dropdowns
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
          <div className="flex">
            <Dropdown.Root>
              <Dropdown.Label>Select an option</Dropdown.Label>
              <Dropdown.Content>
                <Dropdown.Item onClick={() => alert("onClick Event")}>
                  Item 1
                </Dropdown.Item>
                <Dropdown.Item href="http://www.google.com">
                  Item 2
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <div className="flex">
                <Dropdown.Root>
                    <Dropdown.Label>Select an option</Dropdown.Label>
                    <Dropdown.Content>
                    <Dropdown.Item onClick={() => alert("onClick Event")}>
                        Item 1
                    </Dropdown.Item>
                    <Dropdown.Item href="http://www.google.com">Item 2</Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown.Root>            
            </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
