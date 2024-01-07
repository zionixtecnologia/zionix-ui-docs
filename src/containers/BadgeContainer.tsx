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
            <Badge blue>Blue</Badge>
            <Badge blue large>
              Blue
            </Badge>
            <Badge blue bordered>
              Blue
            </Badge>

            <Badge dark>Dark</Badge>
            <Badge dark large>
              Dark
            </Badge>
            <Badge dark bordered>
              Dark
            </Badge>

            <Badge red>Red</Badge>
            <Badge red large>
              Red
            </Badge>
            <Badge red bordered>
              Badge
            </Badge>

            <Badge green>Green</Badge>
            <Badge green large>
              Green
            </Badge>
            <Badge green bordered>
              Green
            </Badge>

            <Badge yellow>Yellow</Badge>
            <Badge yellow large>
              Yellow
            </Badge>
            <Badge yellow bordered>
              Yellow
            </Badge>

            <Badge indigo>Indigo</Badge>
            <Badge indigo large>
              Indigo
            </Badge>
            <Badge indigo bordered>
              Indigo
            </Badge>

            <Badge purple>Purple</Badge>
            <Badge purple large>
              Purple
            </Badge>
            <Badge purple bordered>
              Purple
            </Badge>

            <Badge pink>Badge</Badge>
            <Badge pink large>
              Badge
            </Badge>
            <Badge pink bordered>
              Badge
            </Badge>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <div className="flex gap-6 flex-wrap">
                <Badge blue>Blue</Badge>          
                <Badge blue large>Blue</Badge>
                <Badge blue bordered>Blue</Badge>
    
                <Badge dark>Dark</Badge>
                <Badge dark large>Dark</Badge>
                <Badge dark bordered>Dark</Badge>
    
                <Badge red>Red</Badge>
                <Badge red large>Red</Badge>
                <Badge red bordered>Badge</Badge>
    
                <Badge green>Green</Badge>
                <Badge green large>Green</Badge>
                <Badge green bordered>Green</Badge>
    
                <Badge yellow>Yellow</Badge>
                <Badge yellow large>Yellow</Badge>
                <Badge yellow bordered>Yellow</Badge>
    
                <Badge indigo>Indigo</Badge>
                <Badge indigo large>Indigo</Badge>
                <Badge indigo bordered>Indigo</Badge>
    
                <Badge purple>Purple</Badge>
                <Badge purple large>Purple</Badge>
                <Badge purple bordered>Purple</Badge>
    
                <Badge pink>Badge</Badge>
                <Badge pink large>Badge</Badge>
                <Badge pink bordered>Badge</Badge>
            </div>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
