import { Text, Tab, Hr, Skeleton } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconSkull } from "@tabler/icons-react";

export const SkeletonContainer = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconSkull />
        Skeleton
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
          <div className="flex gap-4 max-w-[550px] flex-wrap">
            <div className="flex flex-col gap-1 justify-center items-center">
              <Skeleton.Avatar size={80} />
              <Skeleton.Row radius width={120} />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <Skeleton.Row radius width={150} />
              <Skeleton.Row radiusMedium width={200} />
              <Skeleton.Row radiusLarge width={280} />
            </div>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
<div className="flex gap-4 max-w-[550px]">

    <div className="flex flex-col gap-1 justify-center items-center">
        <Skeleton.Avatar size={80} />
        <Skeleton.Row radius width={120} />
    </div>

    <div className="flex flex-col justify-center gap-4">
        <Skeleton.Row radius width={150} />
        <Skeleton.Row radiusMedium width={200} />
        <Skeleton.Row radiusLarge width={320} />
    </div>

</div>
            `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
