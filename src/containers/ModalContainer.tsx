import { Text, Tab, Hr, Skeleton, Modal, Button } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconAppWindow, IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";

export const ModalContainer = () => {
  const [danger, setDanger] = useState(false);
  const [info, setInfo] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);
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
          <div className="flex flex-wrap gap-4">
            <Button secondary onClick={() => setDanger(true)}>
              Modal Danger
            </Button>

            <Button secondary onClick={() => setInfo(true)}>
              Modal Info
            </Button>

            <Button secondary onClick={() => setWarning(true)}>
              Modal Warning
            </Button>

            <Button secondary onClick={() => setSuccess(true)}>
              Modal Success
            </Button>
          </div>
          <Modal.Root open={danger} setOpen={setDanger}>
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

            <Modal.Footer cancelText="Abort">
              <Modal.Button
                onClick={() => alert("onClick Button Modal")}
                danger
              >
                Deactive
              </Modal.Button>
            </Modal.Footer>
          </Modal.Root>

          <Modal.Root open={info} setOpen={setInfo}>
            <Modal.Header>
              <Modal.Icon info>
                <IconAlertCircle />
              </Modal.Icon>
              <Modal.Title label="Deactivate account" />
            </Modal.Header>

            <Modal.Text>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </Modal.Text>

            <Modal.Footer cancelText="Abort">
              <Modal.Button onClick={() => alert("onClick Button Modal")} info>
                Deactive
              </Modal.Button>
            </Modal.Footer>
          </Modal.Root>

          <Modal.Root open={warning} setOpen={setWarning}>
            <Modal.Header>
              <Modal.Icon warning>
                <IconAlertCircle />
              </Modal.Icon>
              <Modal.Title label="Deactivate account" />
            </Modal.Header>

            <Modal.Text>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </Modal.Text>

            <Modal.Footer cancelText="Abort">
              <Modal.Button
                onClick={() => alert("onClick Button Modal")}
                warning
              >
                Deactive
              </Modal.Button>
            </Modal.Footer>
          </Modal.Root>

          <Modal.Root open={success} setOpen={setSuccess}>
            <Modal.Header>
              <Modal.Icon success>
                <IconAlertCircle />
              </Modal.Icon>
              <Modal.Title label="Deactivate account" />
            </Modal.Header>

            <Modal.Text>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </Modal.Text>

            <Modal.Footer cancelText="Abort">
              <Modal.Button
                onClick={() => alert("onClick Button Modal")}
                success
              >
                Deactive
              </Modal.Button>
            </Modal.Footer>
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

  <Modal.Footer cancelText="Abort">
    <Modal.Button
      onClick={() => alert("onClick Button Modal")}
      danger
    >
      Deactive
    </Modal.Button>
  </Modal.Footer>
</Modal.Root>
            `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
