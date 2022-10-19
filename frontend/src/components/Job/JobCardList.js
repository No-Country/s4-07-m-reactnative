import { FlatList } from "react-native";
import React from "react";
import JobCard from "./JobCard";
import { useNavigation } from "@react-navigation/native";

const JobCardList = ({ jobs, userData }) => {
    const navigation = useNavigation();

    const render = ({ item }) => (
        <JobCard
            item={item}
            onPress={() => navigation.navigate("Detalle", { value: item, data: userData })}
        />
    );

    return (
        <FlatList
            data={jobs}
            renderItem={render}
            keyExtractor={(item) => item._id}
            className="mb-auto"
        />
    );
};

export default JobCardList;