import {  Text, View, Image } from 'react-native';
import { styles } from './styles';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

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
            
          </View>
        </View>
      </View>
    </>
   
  )
}


