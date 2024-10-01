// src/MainScreen.js

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
      image: require("./img/ca_nau_lau.png"),
    },
    {
      id: "2",
      productName: "1KG KHÔ GÀ BƠ TỎI",
      shopName: "Shop Thịt Ngon",
      image: require("./img/ga_bo_toi.png"),
    },
    {
      id: "3",
      productName: "Xe cần cẩu đa năng",
      shopName: "Shop Đồ Chơi",
      image: require("./img/xa_can_cau.png"),
    },
    {
      id: "4",
      productName: "Đồ chơi dạng mô hình",
      shopName: "Shop Mô Hình",
      image: require("./img/do_choi_dang_mo_hinh.png"),
    },
    {
      id: "5",
      productName: "Lãnh đạo giản đơn",
      shopName: "Shop Sách Hay",
      image: require("./img/lanh_dao_gian_don.png"),
    },
    {
      id: "6",
      productName: "Hiểu lòng con trẻ",
      shopName: "Shop Sách Phụ Huynh",
      image: require("./img/hieu_long_con_tre.png"),
    },
    {
      id: "8",
      productName: "Donal Trump Thiên tài lãnh đạo",
      shopName: "Shop Sách Hay",
      image: require("./img/trump 1.png"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        {/* Hình ảnh sản phẩm */}
        <Image source={item.image} style={styles.productImage} />

        {/* Container cho thông tin sản phẩm */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.shopName}>{item.shopName}</Text>
        </View>

        {/* Nút Chat */}
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => handleChat(item)}
        >
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleChat = (item) => {
    // Xử lý sự kiện chat, ví dụ: điều hướng đến màn hình chat với shop
    console.log(`Chat với ${item.shopName}`);
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

      {/* Dòng chữ mới */}
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>
          Bạn có thắc mắc với sản phẩm vừa xem? Đừng ngại chat với shop!
        </Text>
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

  infoTextContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },

  infoText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    width: "80%",
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
    alignItems: "center", // Đảm bảo các phần tử trong hàng được căn giữa theo chiều dọc
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
    fontSize: 16, // Giảm kích thước font để phù hợp hơn
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
