import { readDir, readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import { setContent } from "../../redux/content-file-slice";
import ContentItem from "./ContentItem";
import { useDispatch } from 'react-redux'

const ContentList = () => {
  const baseDirectory = 'C:/Users/julie';
  const [currentDIrectory, setCurrentDirectory] = useState(baseDirectory)
  const [directoryContent, setDirectoryContent] = useState([]);
  const dispatch = useDispatch()

  useEffect(
    () =>
        {getFolderContent(currentDIrectory)},
    [currentDIrectory]
  );

  const getFolderContent = (dir) => {
    readDir(dir).then((mess) => {
        setDirectoryContent(mess);
      })
  }

  const onSelectItemHandler = (item) => {
    if(item.children !== undefined) {
        setCurrentDirectory(item.path)

    } else {
        console.log('file')
        readTextFile(item.path).then((mess) => {
            console.log(mess)
            dispatch(setContent(String(mess)))
        })
    }
  }

  const onGoingBackHandler = () => {
    setCurrentDirectory(baseDirectory)
  }

  return (
    <div>
      <h1>Content Lisjjdsjt</h1>
      <h1 onClick={onGoingBackHandler}>Go To Base Folder </h1>
      {
        directoryContent.map((x) => (
            <ContentItem onSelectItem={onSelectItemHandler} item={x}></ContentItem>
        ))
    }
    </div>
  );
};

export default ContentList;
