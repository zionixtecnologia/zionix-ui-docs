import { Text, Tab, Hr, Skeleton, Modal, Button } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconAppWindow, IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";

export const ModalContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconAppWindow />
        Modal
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
          <div>
            <Button primary onClick={() => setOpen(true)}>Open Modal</Button>
          </div>
          <Modal.Root open={open} setOpen={setOpen}>
            <Modal.Header>
              <Modal.Icon danger>
                <IconAlertCircle />
              </Modal.Icon>
              <Modal.Title label="Deactivate account" />
            </Modal.Header>

            <Modal.Text>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </Modal.Text>

            <Modal.Buttons cancelText="Abort">
              <button className="bg-red-700 rounded px-4 py-2 text-white cursor-pointer hover:bg-red-600">
                Deactive
              </button>
            </Modal.Buttons>
          </Modal.Root>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
const [open, setOpen] = useState(false);

  <Modal.Root open={open} setOpen={setOpen}>
  <Modal.Header>
    <Modal.Icon danger>
      <IconAlertCircle />
    </Modal.Icon>
    <Modal.Title label="Deactivate account" />
  </Modal.Header>

  <Modal.Text>
    Are you sure you want to deactivate your account? All of your data
    will be permanently removed. This action cannot be undone.
  </Modal.Text>

  <Modal.Buttons cancelText="Abort">
    <button className="bg-red-700 rounded px-4 py-2 text-white cursor-pointer hover:bg-red-600">
      Deactive
    </button>
  </Modal.Buttons>
</Modal.Root>
            `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
