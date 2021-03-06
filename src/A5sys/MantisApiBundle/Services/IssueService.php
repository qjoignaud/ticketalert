<?php

namespace A5sys\MantisApiBundle\Services;

/**
 *
 * ref: mantis_api_bundle.service.issue
 */
class IssueService extends AbstractService
{
    /**
     * Get the recent issues
     *
     * @param int $projectId
     * @return array the issue
     */
    public function getRecentIssues($projectId)
    {
        $client = $this->getClientService();

        $wsFunction = 'mc_project_get_issue_headers';

        $parameters = array(
            'project_id' => $projectId,
            'page_number' => 1,
            'per_page' => 100,
        );

        return $client->callAuthenticatedWs($wsFunction, $parameters);
    }

    /**
     * Update issue resolve version
     *
     * @param int    $issueId
     * @param string $version
     * @return array the issue data
     */
    public function updateIssueResolveVersion($issueId, $version)
    {
        $issueData = $this->getIssue($issueId);

        //safe update
        if (!isset($issueData['fixed_in_version']) || empty($issueData['fixed_in_version'])) {
            $issueData['fixed_in_version'] = $version;

            $this->updateIssue($issueId, $issueData);
        }
    }

    /**
     * Get issue
     *
     * @param int $issueId
     * @return array the issue data
     */
    public function getIssue($issueId)
    {
        $client = $this->getClientService();

        $wsFunction = 'mc_issue_get';

        $parameters = array(
            'issue_id' => $issueId,
        );

        return $client->callAuthenticatedWs($wsFunction, $parameters);
    }

    /**
     * Update issue
     *
     * @param string $username
     * @param string $password
     * @param int $issueId
     * @param []  $issueData
     * @return array the issue data
     */
    public function updateIssue($username, $password, $issueId, $issueData)
    {
        $client = $this->getClientService();

        $wsFunction = 'mc_issue_update';

        $parameters = array(
            'username' => $username,
            'password' => $password,
            'issue_id' => $issueId,
            'issue' => $issueData,
        );

        return $client->callAuthenticatedWs($wsFunction, $parameters);
    }
}
