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

    function editNode(tree,folderId,name){
        if(tree.id === folderId){
            tree.name = name;
            return tree;
        }

        let latestNode = tree.items.map((ele) => (
            editNode(ele,name)
        ));

        return {...tree, items: latestNode}
    }

    function deleteNode(tree, folderId) {
        if (tree.items) {
            tree.items = tree.items.filter(item => item.id !== folderId);
            tree.items.forEach(item => deleteNode(item, folderId));
        }
        return tree;
    }

    function deleteTheFuckingNode(tree, folderId) {
        const newTree = { ...tree };
        deleteNode(newTree, folderId);
        return newTree;
    }

    return {insertNode, deleteTheFuckingNode, editNode}

}

export default useTraverseTree;