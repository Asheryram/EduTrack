import { useState } from "react";
import { Alert } from "react-native";

// Define the shape of a child entry
export interface Child {
  childName: string;
  dob: string;
  age: string;
  school: string;
}

export const useChildForm = () => {
  const [childName, setChildName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [children, setChildren] = useState<Child[]>([]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const resetFields = () => {
    setChildName("");
    setDob("");
    setAge("");
    setSchool("");
    setEditIndex(null);
    setIsEditing(false);
  };

  const handleAddChild = () => {
    if (!childName || !dob || !age || !school) {
      Alert.alert("Please fill all fields");
      return;
    }

    const newChild: Child = { childName, dob, age, school };

    if (isEditing && editIndex !== null) {
      const updated = [...children];
      updated[editIndex] = newChild;
      setChildren(updated);
    } else {
      setChildren((prev) => [...prev, newChild]);
    }

    resetFields();
  };

  const handleEditChild = (index: number) => {
    const child = children[index];
    setChildName(child.childName);
    setDob(child.dob);
    setAge(child.age);
    setSchool(child.school);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleDeleteChild = (index: number) => {
    Alert.alert("Confirm", "Are you sure you want to delete this child?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () =>
          setChildren((prev) => prev.filter((_, i) => i !== index)),
      },
    ]);
  };

  const handleProceed = () => {
    if (children.length === 0) {
      Alert.alert("No children added", "Please add at least one child.");
      return;
    }

    console.log("Proceed with:", children);
  };

  return {
    childName,
    dob,
    age,
    school,
    children,
    isEditing,
    setChildName,
    setDob,
    setAge,
    setSchool,
    handleAddChild,
    handleEditChild,
    handleDeleteChild,
    handleProceed,
  };
};
