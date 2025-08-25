import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.PENDING,
  FilterStatus.DONE
]

const ITEMS = [
  {id: '1', status: FilterStatus.DONE, description: 'Leite'},
  {id: '2', status: FilterStatus.PENDING, description: 'Pão'}
]

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image 
          source={require('@/assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.form}>
          <Input placeholder='O que você deseja comprar?'/>
          <Button title='Adicionar'/>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            {FILTER_STATUS.map((status)=>(
              <Filter
                key={status}
                status={status}
                isActive={status === FilterStatus.PENDING}
              />
            ))}

            <TouchableOpacity style={styles.clearButton} activeOpacity={0.7}>
              <Text style={styles.clearText}>
                Limpar
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={ITEMS}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
              <Item
                data={item}
                onRemove={() => {}}
                onStatus={() => {}}
              />
            }
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=><View style={styles.separator}/>}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={()=>
              <Text style={styles.emptyListText}>
                Nenhum item na lista
              </Text>}
          />

        </View>
      </View>
    </>
   
  )
}


