"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formdata) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formdata);

  try {
    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await User({
      username,
      email,
      password: hashedPass,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formdata) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formdata);

  try {
    connectToDb();

    const newProduct = await Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/users");
};
