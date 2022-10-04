import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { styled } from 'nativewind';
import CustomBtn from './btn';


const StyledView = styled(View);
const StyledText = styled(Text);

// borrar fakeData despues
const fakeData = [
    {
        id:1,
        title:"Foldsack No. 1",
        presupuesto:109.95,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum umquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
        category:"men's clothing",
        date: '23-09-2022',
        location: 'Buenos Aires',
        deadline: '18-9-2022',
        contratadorImage: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
        contratadorNombre: 'Michael Jackson'
    }  
];

const Header = ({ title, price })=> (
    <StyledView className="flex flex-row justify-between flex-wrap">
        <StyledText className='txt-slate800 text-xl w-auto'>{title}</StyledText>
        {/* <StyledText className='text-2xl font-semibold w-auto'>
            <Image source={require("../../assets/MoneyIcon.png")} />{' '} 
            {presupuesto}
        </StyledText> */}
    </StyledView>
);

const DatePlace = ({date, place, category}) => (
    <StyledView className="flex flex-row justify-between">
        <StyledText style={styles.text}>
            <Image source={require('../../assets/Vector.png')}/> {' '}
            {date} 
        </StyledText>
        <StyledText style={styles.text}>
            <Image source={require('../../assets/LocationIcon.png')} />{' '}
            {place}
        </StyledText>
        {/* lo movi para mejor visualizacion */}
        <StyledText className='text-slate-800 rounded-full bg-violet-50 w-auto px-2 text-center'>{category}</StyledText>    
    </StyledView>
)

const Description = ({description, deadline}) => (
    <View className="mt-2">
        <Text>Descripción</Text>
        <StyledText className="mt-3 mb-3">
            {description}
        </StyledText>
        <StyledText className="font-semibold text-red-600">Deadline:{' '} 
            <Text className="text-black font-bold">{deadline}</Text>
        </StyledText>
    </View>
)

const Empleador = ({contratadorImage, nombreContratador, presupuesto }) => (
    <StyledView className="flex flex-row justify-between mt-5 mb-3">
        <StyledView className="flex flex-row">
            <Image source={{uri: contratadorImage, width: 50, height: 50}} className="rounded-full mr-2"/>
            <StyledText className="font-bold pt-1.5">{nombreContratador}{"\n"}
                <Text className="font-normal text-xs">Contratador</Text>
            </StyledText>
        </StyledView>
        <StyledView>
            <View className='text-slate-800 text-center bg-violet-50 w-auto px-2 pt-1' style={styles.presupuesto}>
                <StyledText className="text-center font-extrabold text-xl">${presupuesto} {"\n"} 
                    <Text className="font-normal text-xs text-center m-1.5">Presupuesto</Text>
                </StyledText>
            </View>
        </StyledView>
    </StyledView>
)

const Category = ({category}) => (
    <StyledView className="flex flex-row justify-end">
        <StyledText className='text-slate-800 rounded-full bg-violet-50 w-auto px-2 text-center'>{category}</StyledText>
    </StyledView>
)

const Details = ({navigation}) => {    
    const renderItem = ({ item }) => ( 
            <View style={styles.container} className="rounded-md">
                <Header title={item.title} price={item.price} />
                <DatePlace date={item.date} place={item.location} category={item.category} /> 
                <Description description={item.description} deadline={item.deadline} />
                <Empleador contratadorImage={item.contratadorImage} nombreContratador={item.contratadorNombre} presupuesto={item.presupuesto}/>
                {/* <Category category={item.category} /> */}
                <View style={styles.btn}>
                    <CustomBtn 
                        title="CONTACTAR"
                        titleColor="#570e7e"
                        buttonColor="#D9C6E3"
                        buttonStyle={{
                            borderColor: '#570e7e',
                            borderWidth: 1
                        }}
                        onPress={() => Alert.alert('Boton de Contactar Presionado')}
                    />
                    <CustomBtn 
                        title="APLICAR"
                        onPress={() => navigation.navigate('DetailsScreen')}
                    />
                </View>
            </View>
    );

  return (
    <SafeAreaView>
    {/* cambiar nombre del archivo fakeData por la API  */}
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#D9C6E3',
    padding: 10,
    marginHorizontal: 10
  },
  text: {
    color: 'rgb(86, 85, 85)',
  },
  presupuesto: {
    height: 50,
    borderRadius: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }  
});

export default Details;