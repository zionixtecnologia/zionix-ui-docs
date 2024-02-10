import { Text, Tab, Hr, Checkbox, Badge } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconBadge } from "@tabler/icons-react";

export const BadgeContainer = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconBadge />
        Badge
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
            <Badge color="blue">Blue</Badge>
            <Badge color="blue" large>
              Blue
            </Badge>
            <Badge color="blue" bordered>
              Blue
            </Badge>

            <Badge color="dark">Dark</Badge>
            <Badge color="dark" large>
              Dark
            </Badge>
            <Badge color="dark" bordered>
              Dark
            </Badge>

            <Badge color="red">Red</Badge>
            <Badge color="red" large>
              Red
            </Badge>
            <Badge color="red" bordered>
              Badge
            </Badge>

            <Badge color="green">Green</Badge>
            <Badge color="green" large>
              Green
            </Badge>
            <Badge color="green" bordered>
              Green
            </Badge>

            <Badge color="yellow">Yellow</Badge>
            <Badge color="yellow" large>
              Yellow
            </Badge>
            <Badge color="yellow" bordered>
              Yellow
            </Badge>

            <Badge color="indigo">Indigo</Badge>
            <Badge color="indigo" large>
              Indigo
            </Badge>
            <Badge color="indigo" bordered>
              Indigo
            </Badge>

            <Badge color="purple">Purple</Badge>
            <Badge color="purple" large>
              Purple
            </Badge>
            <Badge color="purple" bordered>
              Purple
            </Badge>

            <Badge color="pink">Badge</Badge>
            <Badge color="pink" large>
              Badge
            </Badge>
            <Badge color="pink" bordered>
              Badge
            </Badge>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <div className="flex gap-6 flex-wrap">
            <Badge color="blue">Blue</Badge>
            <Badge color="blue" large>Blue</Badge>
            <Badge color="blue" bordered>Blue</Badge>
            
            <Badge color="dark">Dark</Badge>
            <Badge color="dark" large>Dark</Badge>
            <Badge color="dark" bordered>Dark</Badge>
            
            <Badge color="red">Red</Badge>
            <Badge color="red" large>Red</Badge>
            <Badge color="red" bordered>Badge</Badge>
            
            <Badge color="green">Green</Badge>
            <Badge color="green" large>Green</Badge>
            <Badge color="green" bordered>Green</Badge>
            
            <Badge color="yellow">Yellow</Badge>
            <Badge color="yellow" large>Yellow</Badge>
            <Badge color="yellow" bordered>Yellow</Badge>
            
            <Badge color="indigo">Indigo</Badge>
            <Badge color="indigo" large>Indigo</Badge>
            <Badge color="indigo" bordered>Indigo</Badge>
            
            <Badge color="purple">Purple</Badge>
            <Badge color="purple" large>Purple</Badge>
            <Badge color="purple" bordered>Purple</Badge>
            
            <Badge color="pink">Badge</Badge>
            <Badge color="pink" large>Badge</Badge>
            <Badge color="pink" bordered>Badge</Badge>
            </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
