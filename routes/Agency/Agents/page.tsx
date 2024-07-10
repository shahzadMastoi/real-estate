"use client";
import { agents } from "../staticData";
import { Card } from "antd";
import styles from "./style.module.scss";
import Link from "next/link";
import GetListed from "@/app/CommonComponents/GetListed/GetListed";
import Pageheader from "@/app/CommonComponents/PageHeader/pageHeader";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const { Meta } = Card;
export default function agent() {

  const data = {
    title: 'Our Agents',
    mainTitle: 'Meet our Team'
  }
  return (
    <>
      <Pageheader data={data} />
      <div className={`container`}>
        <div className={styles.hero}>
          {agents.map((item) => (
            <Link className={styles.card} href={{ pathname: '/routes/Agency/AgentDetail', query: item }}>
              <div className={styles.card}>
                <Card
                  hoverable
                  cover={<img alt="Agent pic" src={item.img} />
                  }
                >
                  <ul
                    className={styles.icons}>
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaInstagram />
                    </li>
                  </ul>
                  <Meta title={item.name} description={item.position} />
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <GetListed />
    </>
  );
}
