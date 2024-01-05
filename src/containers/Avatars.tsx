import { Text, Tab, Hr, Avatar } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconUserCircle } from "@tabler/icons-react";

export const Avatars = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconUserCircle />
        Avatar
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
          <div className="flex flex-wrap items-center gap-4">
            <Avatar label="PG" mini accent />
            <Avatar src="PATH INVALID" />
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
