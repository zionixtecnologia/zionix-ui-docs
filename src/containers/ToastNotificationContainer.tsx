import { Text, Tab, Hr, Badge, useToastNotification, Button } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconBread } from "@tabler/icons-react";

export const ToastNotificationContainer = () => {
  const toast = useToastNotification();
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconBread />
        ToastNotification <Badge green bordered>New v0.0.72</Badge>
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
          <p>
            The first step is to encapsulate the <b>{`<ToastNotification>`}</b>
            component on the main page of your application. From then on, the
            useToastNotification hook will be available to be called anywhere in
            the application. See the examples in the `Code` tab.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button
              secondary
              onClick={() =>
                toast({
                  title: "Danger Notification",
                  description: "This is a simple notification",
                  type: "danger",
                })
              }
            >
              Danger Notification
            </Button>
            <Button
              secondary
              onClick={() =>
                toast({
                  title: "Success Notification",
                  description: "This is a simple notification",
                  type: "success",
                })
              }
            >
              Success Notification
            </Button>
            <Button
              secondary
              onClick={() =>
                toast({
                  title: "Warning Notification",
                  description: "This is a simple notification",
                  type: "warning",
                })
              }
            >
              Warning Notification
            </Button>
            <Button
              secondary
              onClick={() =>
                toast({
                  title: "Info Notification",
                  description: "This is a simple notification",
                  type: "info",
                })
              }
            >
              Info Notification
            </Button>
            <Button
              secondary
              onClick={() =>
                toast({
                  title: "Default Notification",
                  description: "This is a simple notification",
                })
              }
            >
              Default Notification
            </Button>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
/* page index.tsx */
<ToastNotification>
  <App />
</ToastNotification>


/* call examples */

/* don't forget to add the hook */
const toast = useToastNotification();

<div className="flex flex-wrap gap-2">
<Button
  secondary
  onClick={() =>
    toast({
      title: "Danger Notification",
      description: "This is a simple notification",
      type: "danger",
    })
  }
>
  Danger Notification
</Button>
<Button
  secondary
  onClick={() =>
    toast({
      title: "Success Notification",
      description: "This is a simple notification",
      type: "success",
    })
  }
>
  Success Notification
</Button>
<Button
  secondary
  onClick={() =>
    toast({
      title: "Warning Notification",
      description: "This is a simple notification",
      type: "warning",
    })
  }
>
  Warning Notification
</Button>
<Button
  secondary
  onClick={() =>
    toast({
      title: "Info Notification",
      description: "This is a simple notification",
      type: "info",
    })
  }
>
  Info Notification
</Button>
<Button
  secondary
  onClick={() =>
    toast({
      title: "Default Notification",
      description: "This is a simple notification",
    })
  }
>
  Default Notification
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
