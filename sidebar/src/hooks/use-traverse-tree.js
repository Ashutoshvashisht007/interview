const useTraverseTree = ()=> {

    function insertNode(tree,folderId,item,isFolder){
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items:[]
            })
            return tree;
        }

        let latestNode = tree.items.map((ele) => (
            insertNode(ele,folderId,item,isFolder)
        ));

        return {...tree, items: latestNode}
    }

    function editNode(){

    }

    function deleteNode(tree,folderId,isFolder){
        console.log(tree.id, " ", folderId);
        if(!tree.id && !folderId){
            return false;
        }
        if (tree.id === folderId) {
            return true;
        }
        if(tree.items && tree.items.length > 0){
            console.log("Insdie If Statement");
            tree.items = tree.items.filter(item => !deleteNode(item, folderId,item,isFolder));
        }

        return false;
    }

    function deleteTheFuckingNode(tree,folderId,isFolder){
        console.log(tree);
        deleteNode(tree,folderId,isFolder);
        console.log(tree);
        return tree;
    }

    return {insertNode, editNode, deleteTheFuckingNode}

}

export default useTraverseTree;