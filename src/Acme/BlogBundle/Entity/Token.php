<?php

namespace Acme\BlogBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Token
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Acme\BlogBundle\Entity\TokenRepository")
 */
class Token
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="bt_login", type="string", length=255)
     */
    private $btLogin;

    /**
     * @var string
     *
     * @ORM\Column(name="bt_pwd", type="string", length=255)
     */
    private $btPwd;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="isExpired", type="datetime")
     */
    private $isExpired;

    /**
     * @var integer
     *
     * @ORM\Column(name="issue_id", type="integer")
     */
    private $issueId;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set btLogin
     *
     * @param string $btLogin
     *
     * @return Token
     */
    public function setBtLogin($btLogin)
    {
        $this->btLogin = $btLogin;

        return $this;
    }

    /**
     * Get btLogin
     *
     * @return string
     */
    public function getBtLogin()
    {
        return $this->btLogin;
    }

    /**
     * Set btPwd
     *
     * @param string $btPwd
     *
     * @return Token
     */
    public function setBtPwd($btPwd)
    {
        $this->btPwd = $btPwd;

        return $this;
    }

    /**
     * Get btPwd
     *
     * @return string
     */
    public function getBtPwd()
    {
        return $this->btPwd;
    }

    /**
     * Set isExpired
     *
     * @param \DateTime $isExpired
     *
     * @return Token
     */
    public function setIsExpired($isExpired)
    {
        $this->isExpired = $isExpired;

        return $this;
    }

    /**
     * Get isExpired
     *
     * @return \DateTime
     */
    public function getIsExpired()
    {
        return $this->isExpired;
    }

    /**
     * Set issueId
     *
     * @param integer $issueId
     *
     * @return Token
     */
    public function setIssueId($issueId)
    {
        $this->issueId = $issueId;

        return $this;
    }

    /**
     * Get issueId
     *
     * @return integer
     */
    public function getIssueId()
    {
        return $this->issueId;
    }
}
