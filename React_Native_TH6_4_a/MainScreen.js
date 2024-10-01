import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const MainScreen = () => {
  const products = [
    {
      id: "1",
      productName: "Ca nấu lẩu, nấu mì mini",
      shopName: "Shop Lẩu Thịnh",
      image: "https://via.placeholder.com/150.png?text=Ca+nau+lau",
    },
    {
      id: "2",
      productName: "1KG KHÔ GÀ BƠ TỎI",
      shopName: "Shop Thịt Ngon",
      image: "https://via.placeholder.com/150.png?text=Kho+Ga+Bo+Toi",
    },
    {
      id: "3",
      productName: "Xe cần cẩu đa năng",
      shopName: "Shop Đồ Chơi",
      image: "https://via.placeholder.com/150.png?text=Can+Xuc",
    },
    {
      id: "4",
      productName: "Đồ chơi dạng mô hình",
      shopName: "Shop Mô Hình",
      image: "https://via.placeholder.com/150.png?text=Do+choi+mo+hinh",
    },
    {
      id: "5",
      productName: "Lãnh đạo giản đơn",
      shopName: "Shop Sách Hay",
      image: "https://via.placeholder.com/150.png?text=Lanh+Dao+Gian+Don",
    },
    {
      id: "6",
      productName: "Hiểu lòng con trẻ",
      shopName: "Shop Sách Phụ Huynh",
      image: "https://via.placeholder.com/150.png?text=Hieu+Long+Con+Tre",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        {/* Hình ảnh sản phẩm */}
        <Image source={{ uri: item.image }} style={styles.productImage} />

        {/* Container cho thông tin sản phẩm */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.shopName}>{item.shopName}</Text>
        </View>

        {/* Nút Chat */}
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
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
        <Text style={styles.headerText}>Chat</Text>
        <TouchableOpacity onPress={() => console.log("Giỏ hàng")}>
          <Icon name="shopping-cart" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm dạng một cột */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalList}
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
    height: 80,
    paddingTop: 30,
  },

  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

  verticalList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  itemContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },

  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-start",
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "left",
  },

  shopName: {
    fontSize: 14,
    color: "#666",
    textAlign: "left",
  },

  chatButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    width: 100,
    alignSelf: "center",
  },

  chatButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
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
