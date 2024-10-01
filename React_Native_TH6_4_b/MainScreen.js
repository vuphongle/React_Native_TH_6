import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainScreen = () => {
  const products = [
    {
      id: "1",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/giacchuyen 1.png"),
    },
    {
      id: "2",
      productName: "Dây nguồn USB",
      price: "49.900 đ",
      discount: "-20%",
      rating: 4.0,
      reviewCount: 10,
      image: require("./img/daynguon 1.png"),
    },
    {
      id: "3",
      productName: "Adapter chuyển đổi DAU",
      price: "89.900 đ",
      discount: "-10%",
      rating: 4.8,
      reviewCount: 25,
      image: require("./img/dauchuyendoipsps2 1.png"),
    },
    {
      id: "4",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/dauchuyendoi 1.png"),
    },
    {
      id: "5",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/carbusbtops2 1.png"),
    },
    {
      id: "6",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/daucam 1.png"),
    },
    {
      id: "7",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/daucam 1.png"),
    },
    {
      id: "8",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/daucam 1.png"),
    },
    {
      id: "9",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/daucam 1.png"),
    },
    {
      id: "10",
      productName: "Cáp chuyển từ Cổng USB sang PS2",
      price: "69.900 đ",
      discount: "-39%",
      rating: 4.5,
      reviewCount: 15,
      image: require("./img/daucam 1.png"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={
            typeof item.image === "string" ? { uri: item.image } : item.image
          }
          style={styles.productImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                name={index < Math.floor(item.rating) ? "star" : "star-border"}
                size={16}
                color="gold"
              />
            ))}
            <Text style={styles.reviewCount}>({item.reviewCount})</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Quay lại")}>
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Dây cáp USB"
          onChangeText={(text) => console.log(text)}
        />
        <TouchableOpacity onPress={() => console.log("Giỏ hàng")}>
          <Icon name="shopping-cart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Menu")}>
          <Icon name="more-vert" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm dạng lưới */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      {/* Menu dưới cùng */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => console.log("Menu")}>
          <Icon name="menu" size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Trang chủ")}>
          <Icon name="home" size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Quay lại")}>
          <Icon name="arrow-back" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#40acff",
    height: 100,
    paddingTop: 50,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  infoContainer: {
    marginTop: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  discount: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewCount: {
    fontSize: 12,
    marginLeft: 5,
    color: "gray",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#40acff",
    elevation: 5,
  },
});

export default MainScreen;
