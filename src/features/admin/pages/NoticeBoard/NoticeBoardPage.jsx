import { Icons } from "../../../../assets/icons";
import Tabs from "../../../../components/Tabs/Tabs";
import NoticeBoardList from "./NoticeBoardList";
import AddNotice from "./AddNotice";

function NoticeBoardPage() {
  const tabsList = [
    {
      title: "Noticeboard List",
      icon: Icons.Menu,
      component: NoticeBoardList,
    },
    {
      title: "Add Noticeboard",
      icon: Icons.Add,
      component: AddNotice,
    },
  ];

  return (
    <div>
      <Tabs tabsList={tabsList} />
    </div>
  );
}

export default NoticeBoardPage;
