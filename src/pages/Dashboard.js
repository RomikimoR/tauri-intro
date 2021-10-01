import ContentList from "../components/contentList/ContentList";
import CustomEditor from "../components/editor/CustomEditor";

const Dashboard = () => {
    return(
        <div style={{display:'flex', flexDirection:'row'}}>
            <ContentList></ContentList>
            <CustomEditor content="ttoto"></CustomEditor>
        </div>
    );

}

export default Dashboard;