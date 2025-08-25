import type { FilterStatus } from "@/types/FilterStatus"
import { Text, TouchableOpacity, View } from "react-native"
import { StatusIcon } from "../StatusIcon"
import { styles } from "./styles"
import { Trash2 } from "lucide-react-native"

interface ItemData{
  status: FilterStatus
  description: string
}

interface ItemProps{
  data: ItemData
  onStatus: ()=>void
  onRemove: ()=>void
}
export function Item({data, onStatus, onRemove}: ItemProps){
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onStatus}>
        <StatusIcon status={data.status}/>
      </TouchableOpacity>

      <Text style={styles.description}>
        {data.description}
      </Text>

      <TouchableOpacity onPress={onRemove} activeOpacity={0.7}>
        <Trash2 size={18} color='#828282'/>
      </TouchableOpacity>
    </View>
  )
}