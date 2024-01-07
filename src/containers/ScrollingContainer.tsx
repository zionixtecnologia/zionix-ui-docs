import { Text, Tab, Hr, Scrolling, Card } from "zionix-ui";
import * as Icon from "@/components/Icon";
import Highlight from "react-highlight";
import { IconLayoutSidebar } from "@tabler/icons-react";

export const ScrollingContainer = () => {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <Text extraLarge>
        <IconLayoutSidebar />
        Scrolling
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
          <div className="max-w-2xl">
            <Scrolling>
              <div className="bg-slate-50 w-[220px] inline-block mr-4 shadow rounded-2xl hover:scale-105 ease-in-out duration-300">
                <img
                  src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"
                  className="rounded-2xl p-2"
                  alt="image"
                />
              </div>

              <div className="bg-slate-50 w-[220px] inline-block mr-4 shadow rounded-2xl hover:scale-105 ease-in-out duration-300">
                <img
                  src="https://cdn.pixabay.com/photo/2020/02/15/16/09/loveourplanet-4851331_1280.jpg"
                  className="rounded-2xl p-2"
                  alt="image"
                />
              </div>

              <div className="bg-slate-50 w-[220px] mr-4 inline-block shadow rounded-2xl hover:scale-105 ease-in-out duration-300">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg"
                  className="rounded-2xl p-2"
                  alt="image"
                />
              </div>

              <div className="bg-slate-50 w-[220px] mr-4 inline-block shadow rounded-2xl hover:scale-105 ease-in-out duration-300">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg"
                  className="rounded-2xl p-2"
                  alt="image"
                />
              </div>
            </Scrolling>
          </div>
        </Tab.Content>

        <Tab.Content idItem="code">
          <Highlight className="jsx">
            {`
            <Card>
              <Scrolling>

                <div className="bg-slate-50 w-[220px] inline-block mr-4 shadow rounded-2xl hover:scale-105 ease-in-out duration-300">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg"
                    className="rounded-2xl p-2"
                    alt="image"
                  />
                </div>
    
                <div className="bg-slate-50 w-[220px] inline-block mr-4 shadow rounded-2xl hover:scale-105 ease-in-out duration-300">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/02/15/16/09/loveourplanet-4851331_1280.jpg"
                    className="rounded-2xl p-2"
                    alt="image"
                  />
                </div>  
              
              </Scrolling>
            </Card>
              `}
          </Highlight>
        </Tab.Content>
      </Tab.Root>

      <Hr />
    </div>
  );
};
