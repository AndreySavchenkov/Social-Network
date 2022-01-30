export const updateObjectInArray = (items:any[], itemId:string | number, objPropName: string, newObjProps: any) => {

   return  items.map(u => {
        if (u[objPropName] === itemId) {
            //@ts-ignore
            return {...u, ...newObjProps}
        }
        return u;
    })
}