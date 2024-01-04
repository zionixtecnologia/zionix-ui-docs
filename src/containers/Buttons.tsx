import { Button, Text, Tab, Hr } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";

export const Buttons = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <Icon.Button />
        Buttons
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
          <div className="flex items-center mt-6 gap-4 flex-wrap">
            <div className="flex flex-col gap-4">
              <Button primary>Default</Button>
              <Button primary size="sm">
                Small
              </Button>
              <Button primary size="xs">
                Extra-small
              </Button>

              <Button primary disabled>
                Default
              </Button>
              <Button primary disabled size="sm">
                Small
              </Button>
              <Button primary disabled size="xs">
                Extra-small
              </Button>

              <Button primary isLoading>
                Default
              </Button>
              <Button primary size="sm" isLoading>
                Small
              </Button>
              <Button primary size="xs" isLoading>
                Extra-small
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Button invertedPrimary>Default</Button>
              <Button invertedPrimary size="sm">
                Small
              </Button>
              <Button invertedPrimary size="xs">
                Extra-small
              </Button>

              <Button invertedPrimary disabled>
                Default
              </Button>
              <Button invertedPrimary disabled size="sm">
                Small
              </Button>
              <Button invertedPrimary disabled size="xs">
                Extra-small
              </Button>

              <Button invertedPrimary isLoading>
                Default
              </Button>
              <Button invertedPrimary size="sm" isLoading>
                Small
              </Button>
              <Button invertedPrimary size="xs" isLoading>
                Extra-small
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Button secondary>Default</Button>
              <Button secondary size="sm">
                Small
              </Button>
              <Button secondary size="xs">
                Extra-small
              </Button>

              <Button secondary disabled>
                Default
              </Button>
              <Button secondary disabled size="sm">
                Small
              </Button>
              <Button secondary disabled size="xs">
                Extra-small
              </Button>

              <Button secondary isLoading>
                Default
              </Button>
              <Button secondary size="sm" isLoading>
                Small
              </Button>
              <Button secondary size="xs" isLoading>
                Extra-small
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Button invertedSecondary>Default</Button>
              <Button invertedSecondary size="sm">
                Small
              </Button>
              <Button invertedSecondary size="xs">
                Extra-small
              </Button>

              <Button invertedSecondary disabled>
                Default
              </Button>
              <Button invertedSecondary disabled size="sm">
                Small
              </Button>
              <Button invertedSecondary disabled size="xs">
                Extra-small
              </Button>

              <Button invertedSecondary isLoading>
                Default
              </Button>
              <Button invertedSecondary size="sm" isLoading>
                Small
              </Button>
              <Button invertedSecondary size="xs" isLoading>
                Extra-small
              </Button>
            </div>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {` 
<div>
<Button primary>Default</Button>
<Button primary size="sm">
  Small
</Button>
<Button primary size="xs">
  Extra-small
</Button>
<Button primary disabled>
  Default
</Button>
<Button primary disabled size="sm">
  Small
</Button>
<Button primary disabled size="xs">
  Extra-small
</Button>
<Button primary isLoading>
  Default
</Button>
<Button primary size="sm" isLoading>
  Small
</Button>
<Button primary size="xs" isLoading>
  Extra-small
</Button>
<Button invertedPrimary>Default</Button>
<Button invertedPrimary size="sm">
  Small
</Button>
<Button invertedPrimary size="xs">
  Extra-small
</Button>
<Button invertedPrimary disabled>
  Default
</Button>
<Button invertedPrimary disabled size="sm">
  Small
</Button>
<Button invertedPrimary disabled size="xs">
  Extra-small
</Button>
<Button invertedPrimary isLoading>
  Default
</Button>
<Button invertedPrimary size="sm" isLoading>
  Small
</Button>
<Button invertedPrimary size="xs" isLoading>
  Extra-small
</Button>
<Button secondary>Default</Button>
<Button secondary size="sm">
  Small
</Button>
<Button secondary size="xs">
  Extra-small
</Button>
<Button secondary disabled>
  Default
</Button>
<Button secondary disabled size="sm">
  Small
</Button>
<Button secondary disabled size="xs">
  Extra-small
</Button>
<Button secondary isLoading>
  Default
</Button>
<Button secondary size="sm" isLoading>
  Small
</Button>
<Button secondary size="xs" isLoading>
  Extra-small
</Button>
<Button invertedSecondary>Default</Button>
<Button invertedSecondary size="sm">
  Small
</Button>
<Button invertedSecondary size="xs">
  Extra-small
</Button>
<Button invertedSecondary disabled>
  Default
</Button>
<Button invertedSecondary disabled size="sm">
  Small
</Button>
<Button invertedSecondary disabled size="xs">
  Extra-small
</Button>
<Button invertedSecondary isLoading>
  Default
</Button>
<Button invertedSecondary size="sm" isLoading>
  Small
</Button>
<Button invertedSecondary size="xs" isLoading>
  Extra-small
</Button>
</div>

              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
