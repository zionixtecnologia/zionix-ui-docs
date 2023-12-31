import { Card, Input, Text, Tab, Hr, Toggle } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";

export const Form = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <Icon.Form />
        Form
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
          <Card className="w-[420px] max-w-full">
            <Input
              placeholder="Informe o seu username"
              label="Username"
              mandatory
              icon={<Icon.User />}
            />
            <Input
              placeholder="Informe o seu e-mail"
              label="E-mail"
              type="email"
            />
            <Input
              placeholder="0,00"
              label="Currency Value"
              type="currency"
              icon={<Icon.Real />}
            />
            <Input
              placeholder="Informe o seu e-mail"
              label="Password"
              type="password"
            />
            <Toggle name="admin" label="Is Admin?"/>
          </Card>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <>
            <Card className="w-[420px] max-w-full">
              <Input
                placeholder="Informe o seu username"
                label="Username"
                mandatory
                icon={<Icon.User />}
              />
              <Input
                placeholder="Informe o seu e-mail"
                label="E-mail"
                type="email"
              />
              <Input
                placeholder="0,00"
                label="Currency Value"
                type="currency"
                icon={<Icon.Real />}
              />
              <Input
                placeholder="Informe o seu e-mail"
                label="Password"
                type="password"
              />
            </Card>
          </>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
