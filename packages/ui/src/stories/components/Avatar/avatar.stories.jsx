
import Avatar from "."
import face1 from "@/assets/images/face-male-4.jpg"
export default {
    component: Avatar,
}


export const Primary = () => {
    return <Avatar src={face1} />
}